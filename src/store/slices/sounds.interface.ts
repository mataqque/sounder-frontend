export interface IFile {
    collectionId: string;
    collectionName: string;
    created: string;
    file: string;
    id: string;
    name: string;
    updated: string;
}
export interface IMusic {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    items: IFile[];
}

export interface ISound {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    items: IFile[];
}


export interface ISoundsState {
    sounds: ISound;
    music: IMusic;
}