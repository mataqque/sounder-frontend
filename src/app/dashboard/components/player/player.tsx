'use client';
import { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { obsPlayer } from './obsplayer';
import { IFile } from '../cards/file.interface';
import './player-audio.scss';

export const AudioPlayerComponent = () => {
	const [item, setItem] = useState<IFile>({} as IFile);
	const path = item.file ? `/api/files/${item.collectionId}/${item.id}/${item.file}` : '';
	useEffect(() => {
		obsPlayer.subscribe(data => {
			setItem(data);
		});
	}, [item]);
	return (
		<AudioPlayer
			className='player-audio'
			autoPlay
			src={path}
			onPlay={e => console.log('onPlay')}

			// other props here
		/>
	);
};
