import {createVuetify} from "vuetify"

import * as components from "vuetify/componenets"
import * as directives from "vuetify/directives"

import * as labsComponents from "vuetify/labs/components"
import {VDataTable } from "vuetify/labs/VDataTable"

export default defineNuxtPlugin((nuxtApp) =>{
    const vuetify = createVuetify({
        ssr: true,
        components: {
            VDataTable,
            labsComponents,
            ...components
        },
        defaults: {
            VCard: {
                rounded: "md",
                elevation: 10,
            },
            VTextField: {
                variant: "outlined",
                density: "comfortable",
                color: "primary",
            },
            VSelect: {
                variant: "outlined",
                density: "comfortable",
                color: "primary",
            },
            VListItem: {
                minHeight: "45px",
            },
            VTooltip: {
                location: "top",
            },
            VBtn: {
                style: "text-transform: capitalize; letter-spacing: 0",
                rounded: "md",
            }
        }
    })
})