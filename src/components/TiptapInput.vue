<template>
    <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
    name: "TitTap",

    components: {
        EditorContent,
    },

    props: {
        content: {
            type: String
        }
    },

    data() {
        return {
            editor: null,
        }
    },

    mounted() {
        this.editor = new Editor({
            content: this.content,
            extensions: [
                StarterKit
            ],
        })
    },

    beforeUnmount() {
        this.editor.destroy()
    },
}
</script>

<style>
.tiptap {
    margin: 1em;
    padding: 1em;
}
</style>