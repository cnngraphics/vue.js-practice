<template>
   <div class="questionbox-component-">

    <div class="container">
      <b-jumbotron class="m-3">
        <template slot="lead"> Some Questtion Here </template>

        <hr class="my-4" />

        <p>List of answers</p>

        <b-button class="m-2" variant="primary" href="#">Submit</b-button>
        <b-button class="m-2" variant="success" href="#"
          >Next</b-button
        >
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
    export default {
    name: 'QuestionBot',
    props: {
        msg: String
    }
    }
</script>