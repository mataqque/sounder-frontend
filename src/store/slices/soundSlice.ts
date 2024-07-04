import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISoundsState } from './sounds.interface';

const initialState: ISoundsState = {
    sounds: []
};
const soundSlice = createSlice({
    name: 'soundSlice',
    initialState,
    reducers: {
        updateSounds: (state, action: PayloadAction<ISoundsState>) => {
            state.sounds.push(action.payload);
        },
    },
});

export const { updateSounds } = soundSlice.actions;

export default soundSlice.reducer;

// export const datathanksTypology = (state: any) => state.soundSlice.thanksTypology;
