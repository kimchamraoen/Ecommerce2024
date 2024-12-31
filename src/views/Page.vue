<template>
  <div>
    <h1 style="position: absolute; bottom: 30rem; left: 40rem">
      Welcome to Page {{ pageId }}
    </h1>
    <div class="DisplayMessage">
      <div class="text-center" style="margin-top: -7rem">
        <span>Input Message: </span>
        <input
          type="text"
          v-model="input"
          @keypress.enter="addEntry"
          placeholder="Input Message"
        />
      </div>
      <div style="margin-left: 37rem">
        <div v-if="Messages.length">
          <p v-for="(Message, index) in Messages" :key="index">
            Message from Page {{ Message.pageId }}: {{ Message.text }}
          </p>
        </div>
        <div v-if="SectionMessages.length">
          <p v-for="(Message, index) in SectionMessages" :key="index">
            Message from Section {{ Message.sectionNum }} Page
            {{ Message.pageId }}: {{ Message.text }}
          </p>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { RouterView } from "vue-router";

export default {
  name: "Page",
  computed: {
    pageId() {
      return this.$route.params.id;
    },
    sectionId() {
      return this.$route.params.sectionId;
    },
  },
  data() {
    return {
      input: "",
      Messages: [],
      SectionMessages: [],
    };
  },
  methods: {
    addEntry() {
      if (this.input.trim()) {
        const message = {
          text: this.input,
          pageId: this.pageId,
        };

        if (this.sectionId) {
          message.sectionNum = this.sectionId;
          this.SectionMessages.push(message);
        } else {
          this.Messages.push(message);
        }
        this.input = ""; // Clear the input after adding the message
      }
    },
  },
};
</script>

<style></style>
