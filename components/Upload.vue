/* eslint-disable no-console */
/* eslint-disable no-console */
<template>
  <div>
    <div>
      <!-- <p>Upload an image to Firebase:</p> -->
      <input
        type="file"
        accept="image/*"
        name="file"
        class="custom-file-input"
        @change="previewImage"
      >
    </div>
    <div>
      <v-btn
        class="primary"
        @click="onUpload"
      >
        Upload
      </v-btn>
      <p>
        Progress: {{ uploadValue.toFixed()+"%" }}
        <progress id="progress" :value="uploadValue" max="100" />
      </p>
    </div>
    <div>
      <img class="preview" :src="picture">
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'Upload',
  data () {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0
    }
  },
  methods: {
    previewImage (event) {
      this.uploadValue = 0
      this.picture = null
      this.imageData = event.target.files[0]
    },

    onUpload () {
      this.picture = null
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
              })
          }

        )
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }
  }
}
</script>
<style scoped="">
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
