import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export function addIcons() {
    library.add([
        faChevronDown,
        faCirclePlus
    ])
}