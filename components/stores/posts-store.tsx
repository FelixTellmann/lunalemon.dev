import { makeStore } from "components/stores/_make-store";

const { Provider, useStore } = makeStore([], "Posts");

export const usePostStore = useStore;
export const PostsProvider = Provider;