<template>
  <v-row cols="12">
    <v-spacer></v-spacer>
    <v-col cols="12" sm="6">
      <v-card tile elevation="6" class="mb-10 py-5">
        <v-card-title class="text-h4 primary--text"> Key </v-card-title>
        <v-card-text>
          <v-row
            align="center"
            align-content="center"
            justify="center"
            class="py-2"
            no-gutters
          >
            <v-col cols="2">
              <v-avatar color="secondary" size="32"></v-avatar>
            </v-col>
            <v-col cols="auto"
              ><span class="primary--text text-h6"> Plant Photo </span></v-col
            >
          </v-row>
          <v-divider></v-divider>
          <v-row
            align="center"
            align-content="center"
            justify="center"
            class="py-2"
            no-gutters
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <div
                    class="primary--text text-caption text-body-1"
                    style="
                      min-width: 200px;
                      max-width: 300px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    "
                  >
                    <div class="text-center">
                      <h3 class="text-h5 accent--text">Photo Title</h3>
                      <p class="text-subtitle-1 font-italic">
                        Longitude, Latitude
                      </p>
                    </div>
                    <table
                      class="text-left"
                      style="table-layout: fixed; width: 100%"
                    >
                      <tr>
                        <td class="font-weight-bold">ID:</td>
                        <td>Flickr Assigned Photo ID</td>
                      </tr>
                      <tr>
                        <td class="font-weight-bold">Taken:</td>
                        <td>Date Photo was Taken</td>
                      </tr>
                      <tr>
                        <td class="font-weight-bold">Language:</td>
                        <td>Language(s) Used in Photo</td>
                      </tr>
                      <tr>
                        <td class="font-weight-bold">Species:</td>
                        <td>Species in Photo</td>
                      </tr>
                      <tr style="word-wrap: break-word">
                        <td class="font-weight-bold">Tags:</td>
                        <td style="max-width: 50px; overflow: hidden">
                          Photo Tags
                        </td>
                      </tr>
                    </table>
                  </div>
                </span>
              </template>
              <span> Key for Plant Photo Popups </span>
            </v-tooltip>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MapKey",
};
</script>