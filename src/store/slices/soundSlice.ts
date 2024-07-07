import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMusic, ISound, ISoundsState } from './sounds.interface';
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
    },
});

export const { updateSounds, updateMusics } = soundSlice.actions;

export default soundSlice.reducer;

export const getFilesMusics = (state: IRootState) => state.soundSlice.music.items;
