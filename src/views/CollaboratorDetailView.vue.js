import CollaboratorDetail from "@/components/CollaboratorDetail.vue";
import { useCollaboratorStore } from "@/stores/collaboratorsListStore";
import { useRoute, useRouter } from "vue-router";
import { computed, watchEffect } from "vue";
const props = defineProps();
const route = useRoute();
const router = useRouter();
const store = useCollaboratorStore();
// resolve the collaborator either from props or by looking up the name param/query
const resolved = computed(() => {
    if (props.collaborator)
        return props.collaborator;
    const name = String(route.params.name || route.query.name || "");
    return store.allCollaborators.find((c) => c.name === name);
});
// if none could be found, redirect back to the list after the current tick
watchEffect(() => {
    if (resolved.value === undefined) {
        router.replace({ name: "collaboratorsList" });
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (__VLS_ctx.resolved) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    const __VLS_0 = CollaboratorDetail;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        collaborator: (__VLS_ctx.resolved),
    }));
    const __VLS_2 = __VLS_1({
        collaborator: (__VLS_ctx.resolved),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-center mt-8" },
    });
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-8']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
}
// @ts-ignore
[resolved, resolved,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
