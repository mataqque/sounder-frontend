import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFile, IMusic, ISound, ISoundsState } from './sounds.interface';
import { IRootState } from '../store';

const initialState: ISoundsState = {
    sounds: {
        page: 1,
        perPage: 30,
        totalItems: 0,
        totalPages: 0,
        items: [],
    },
    music: {
        page: 1,
        perPage: 30,
        totalItems: 0,
        totalPages: 0,
        items: [],
    },
};
const soundSlice = createSlice({
    name: 'soundSlice',
    initialState,
    reducers: {
        updateSounds: (state, action: PayloadAction<ISound>) => {
            state.sounds = action.payload;
        },
        updateMusics: (state, action: PayloadAction<IMusic>) => {
            state.music = action.payload;
        },
        selectedMusic: (state, action: PayloadAction<IFile | null>) => {
            const files = state.music.items.map((file: IFile) => {
                file.selected = false;
                if (file.id === action.payload?.id) {
                    file.selected = !file.selected;
                    return file;
                }
                return file;
            });
            state.music.items = files;
        },
    },
});

export const { updateSounds, updateMusics, selectedMusic } = soundSlice.actions;

export default soundSlice.reducer;

export const getFilesMusics = (state: IRootState) => state.soundSlice.music.items;

// export const selectedMusicItem = (state: IRootState) => state.soundSlice.music;
