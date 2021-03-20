import { Bookmark } from "../../app/interfaces";

export interface ReceivedBookmark {
    url: string;
    title: string;
    author_name?: string;
    width: number;
    height: number;
    duration?: number;
}

export function getFormattedBookmark(bookmark: ReceivedBookmark): Bookmark {
    // simulate an ID
    let uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);
    const myDate = new Date();

    return {
        id: uniqueId,
        url: bookmark.url,
        title: bookmark.title,
        author: bookmark.author_name,
        width: bookmark.width,
        height: bookmark.height,
        duration: bookmark.duration,
        createdDate: myDate,
        tags: [],
    }
}

export function create({ url }: { url: string }) {
    return fetch(`https://noembed.com/embed?url=${url}`)
        .then(response => {
            return response.json();
        })
        .then(responseData => {
            return getFormattedBookmark(responseData)
        })
        .catch(error => {
            throw new Error('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        });
}
