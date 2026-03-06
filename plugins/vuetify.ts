// plugins/vuetify.ts
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiHandshake, mdiClose, mdiChevronDown, mdiChevronUp, mdiAccountCircle, mdiMagnify, mdiChevronRight, mdiMapMarker} from '@mdi/js'

export default createVuetify({
	defaults: {
        VBtn: {
            color: 'var(--neo-medium-blue)',
        }
    },
    icons: {
        defaultSet: 'mdi',
        aliases: {
            ...aliases,
            handshake: mdiHandshake,
            close: mdiClose,
            chevronUp: mdiChevronUp,
            chevronDown: mdiChevronDown,
            chevronRight: mdiChevronRight,
            account: mdiAccountCircle,
            magnify: mdiMagnify,
            location: mdiMapMarker,
        },
        sets: { mdi }
    }
})