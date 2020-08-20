<template>
  <v-container fill-height fluid>
    <v-layout justify-center column wrap class="txt">
      <v-flex xs12 md12>
        <v-card-text class="text-center black--text">
          Upload Building Photo
        </v-card-text>

        <v-layout justify-center align-center column>
          <v-flex xs12 md12 class="mt-4">
            <v-img
              ref="photo"
              :src="picture"
              aspect-ratio="1"
              class="grey lighten-2"
              width="500"
              height="300"
            >
              <template v-slot:placeholder>
                <v-layout row class="fill-height ma-0" align="center" justify="center" />
              </template>
            </v-img>
          </v-flex>
          <v-flex xs12 class="mt-4">
            <input
              type="file"
              accept="image/*"
              name="file"
              class="custom-file-input"
              @change="chooseImage"
            >
          </v-flex>
          <v-flex>
            <p>
              Progress: {{ uploadValue.toFixed()+"%" }}
              <progress id="progress" :value="uploadValue" max="100" />
            </p>
          </v-flex>
          <v-flex>
            <v-btn
              class="primary"
              @click="onUpload"
            >
              Upload Image
            </v-btn>
          </v-flex>
        </v-layout>

        <v-layout justify-center>
          <v-card-actions class="mx-auto">
            <v-btn
              to="/landlord/my_apartments"
              color="#ec710d"
              class="btn white--text"
              @click="storeProperty"
            >
              Next
            </v-btn>
          </v-card-actions>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
import axios from 'axios'
export default {
  name: 'UploadHousePhotoPage',
  data: () => ({
    imageData: null,
    picture: '',
    uploadValue: 0
  }),
  computed: {
    ...mapGetters(['getProperty', 'getUser'])
  },

  methods: {
    chooseImage (event) {
      this.uploadValue = 0
      this.picture = ''
      this.imageData = event.target.files[0]
    },
    onUpload () {
      this.picture = ''
      const storage = firebase.storage()
      const storageRef = storage.ref()
      const metadata = {
        contentType: 'image/*'
      }
      try {
        const uploadTask = storageRef.child(`images/${this.imageData.name}`).put(this.imageData, metadata)
        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                // eslint-disable-next-line no-console
                console.log('Upload is paused')
                break
              case firebase.storage.TaskState.RUNNING: // or 'running'
                // eslint-disable-next-line no-console
                console.log('Upload is running')
                break
            }
          }, (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break
              case 'storage/canceled':
                // User canceled the upload
                break
              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                console.log(
                  'Could not upload invoice to the cloud. Try again',
                  'error'
                )
                break
            }
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL()
              .then((downloadURL) => {
                // eslint-disable-next-line no-console
                console.log(downloadURL)
                this.picture = downloadURL
                this.$store.commit(
                  'SET_PROPERTY_PICTURE', downloadURL
                )
              })
          }

        )
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    },
    storeProperty () {
      this.updateProperty(this)
    },
    updateProperty (context) {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: context.$store.getters.getUser.token
      }
      axios
        .post(
          'https://movein-app.herokuapp.com/property/',
          {
            property_type: this.getProperty.property_type,
            property_name: this.getProperty.property_name,
            area: this.getProperty.location.name,
            location: this.getProperty.location.coords,
            total_units: this.getProperty.available_units,
            available_units: this.getProperty.available_units,
            property_picture: this.getProperty.property_picture
          },
          {
            headers
          }
        )
        .then(function (response) {
          // eslint-disable-next-line no-console
          // console.log(response.data)
          // eslint-disable-next-line no-console
          console.log(response)
          console.log(response.data[0].payload.Property_id.property_id)

          context.$store.commit(
            'SET_PROPERTY_ID',
            response.data[0].payload.Property_id.property_id
          )

          // const token = response.data.token
          // sessionStorage.setItem('token', token)
          // eslint-disable-next-line no-console
          // console.log(sessionStorage.getItem)
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    } // update property,
  }
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
.btn {
  position: fixed;
  z-index: 100;

  left: 44%;
  top: 85%;
  bottom: 50px;
}
img.preview {
    width: 200px;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: 'Select files';
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
.custom-file-input:hover::before {
  border-color: black;
}
.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
.primary{
  color: rgb(228, 19, 64);
  background-color: cadetblue;
  padding: 10 10 10 10;
}
</style>
