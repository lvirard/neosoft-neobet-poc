import CollaboratorFilters from "@/components/CollaboratorFilters.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCollaboratorStore } from "@/stores/collaboratorsListStore";
const router = useRouter();
function handleSearch() {
    router.push({ name: "collaboratorsList" });
}
onMounted(() => {
    useCollaboratorStore().resetFilters();
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "text-center mb-6" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
const __VLS_0 = CollaboratorFilters;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex justify-center mt-4 pt-4" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-4']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    ...{ 'onClick': {} },
    prependIcon: "$magnify",
    variant: "elevated",
    color: "primary",
    ...{ class: "mt-4" },
}));
const __VLS_7 = __VLS_6({
    ...{ 'onClick': {} },
    prependIcon: "$magnify",
    variant: "elevated",
    color: "primary",
    ...{ class: "mt-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_10;
const __VLS_11 = ({ click: {} },
    { onClick: (__VLS_ctx.handleSearch) });
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
const { default: __VLS_12 } = __VLS_8.slots;
// @ts-ignore
[handleSearch,];
var __VLS_8;
var __VLS_9;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
