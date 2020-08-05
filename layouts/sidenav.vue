<template>
  <v-app class="bg">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          class="txt "
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="#0091ad "
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
       <v-toolbar-title v-text="title" class="txt white--text"></v-toolbar-title>
       <v-spacer> </v-spacer>
        <v-toolbar-items>
      <v-flex

        py-2>
      
        <router-link
          v-ripple
          class="toolbar-items "
          to="/landlord">
          <v-icon color="white" class="mr-2">mdi-home</v-icon>
        </router-link>
        <v-menu
          bottom
          left
          content-class
          offset-y
          transition="slide-y-transition">
          <router-link
            v-ripple
            slot="activator"
            class="toolbar-items"
            to="/landlord/bookings"
            
          >
            <v-badge
              color="red"
              overlap>
              <template slot="badge">1</template>
              <v-icon color="white" > mdi-bell</v-icon>
            </v-badge>
          </router-link>
          <v-card>
            <v-list dense>
              <v-list-tile
                v-for="notification in notifications"
                :key="notification"
                >
                <v-list-tile-title v-text="notification"/>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>

        <v-icon
          class="toolbar-items ml-2"
          color="white"
          >mdi-power</v-icon>
      </v-flex>
    </v-toolbar-items>
      <v-spacer />

    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
      class="txt"
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
      class="bg-col white--text txt"
    >
      <span>&copy; MoveIn {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-account',
          title: 'My Account',
          to: '/'
        },
        {
          icon: 'mdi-home-modern',
          title: 'My Properties',
          to: '/landlord/my_apartments'
        },
         {
          icon: 'mdi-home-modern',
          title: 'Basic Details',
          to: '/landlord/basic_details'
        },
         {
          icon: 'mdi-home-modern',
          title: 'House Features',
          to: '/inspire'
        },
        {
          icon: 'mdi-home-modern',
          title: 'Basic Amenities',
          to: '/inspire'
        },
        
      ],
      
    responsive: false,
    responsiveInput: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'MoveIn'
    }
  }
}
</script>
<style scoped>
.bg{
  background: url( '~static/bg.png');
}
.bg-col{
  background-color:#0091ad ;
}
.txt{
  font-family: "Comfortaa", cursive;
  color: #ec7d10;
}
</style>