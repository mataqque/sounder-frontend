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

    },
});

export const { } = soundSlice.actions;

export default soundSlice.reducer;

export const getFilesMusics = (state: any) => state.soundSlice.music;

// export const selectedMusicItem = (state: IRootState) => state.soundSlice.music;
