'use client';
import { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { obsPlayer } from './obsplayer';
import { IFile } from '../cards/file.interface';

export const AudioPlayerComponent = () => {
	const [item, setItem] = useState<IFile>({} as IFile);
	useEffect(() => {
		obsPlayer.subscribe(data => {
			console.log(data);
			setItem(data);
		});
	}, []);
	return (
		<AudioPlayer
			autoPlay
			src={'/api/files/' + item.collectionId + '/' + item.id + '/' + item.file}
			onPlay={e => console.log('onPlay')}
			// other props here
		/>
	);
};
