<template>
  <v-form rel="form">
    <v-container>
      <v-row><h2>Nový recept</h2></v-row>
      <v-row align="center">
        <v-col cols="12">
          <v-text-field
            v-model="recipe.name"
            outlined
            validate-on-blur
            label="Název"
            name="name"
            :rules="[rules.required]"
          ></v-text-field>
          <v-textarea
            v-model="recipe.description"
            outlined
            label="Postup"
            name="description"
          ></v-textarea>
          <v-file-input
            outlined
            accept="image/*"
            label="Hlavní obrázek"
            name="image"
            @change="onFileChanged"
          ></v-file-input>
        </v-col>
        <v-col cols="12">
          <v-btn primary large block @click="createRecipe"
            >Vytvořit recept</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RecipeAdd',
  data: () => {
    return {
      recipe: {
        name: '',
        description: '',
        image: false
      },
      rules: {
        required: (value) => !!value || 'Povinná položka.',
        min: (v) => v.length >= 8 || 'Minimálně 8 znaků'
      }
    }
  },
  methods: {
    onFileChanged(file) {
      this.recipe.image = file
    },
    async createRecipe() {
      if (this.recipe.image !== false) {
        const formData = new FormData()
        formData.append('file', this.recipe.image, this.recipe.image.name)
        formData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET)
        formData.append('folder', 'recipes')

        try {
          const response = await axios.post(
            `${process.env.CLOUDINARY_URL}image/upload`,
            formData
          )

          window.console.log(response)
          window.console.log(response.data.public_id)
        } catch (e) {
          window.console.log(e)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
