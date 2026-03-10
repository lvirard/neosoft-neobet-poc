import CollaboratorCard from '@/components/CollaboratorCard.vue';
import { useCollaboratorStore } from '@/stores/collaboratorsListStore';
const store = useCollaboratorStore();
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
for (const [collaborator] of __VLS_vFor((__VLS_ctx.store.favoriteCollaborators))) {
    const __VLS_0 = CollaboratorCard;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        collaborator: collaborator,
        key: "collaborator.name",
    }));
    const __VLS_2 = __VLS_1({
        collaborator: collaborator,
        key: "collaborator.name",
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [store,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
