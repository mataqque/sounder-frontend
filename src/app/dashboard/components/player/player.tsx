'use client';
import { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { obsPlayer } from './obsplayer';
import './player-audio.scss';
import { useSelector } from 'react-redux';
import { IFile } from '@/store/slices/sounds.interface';

export const AudioPlayerComponent = () => {
	const [file, setFile] = useState<IFile>({} as IFile);
	useEffect(() => {
		obsPlayer.subscribe(f => {
			setFile(f);
		});
	}, []);
	return (
		<AudioPlayer
			className='player-audio'
			autoPlay
			src={file.id ? `/api/files/${file.collectionId}/${file.id}/${file.file}` : ''}
			onPlay={e => console.log('onPlay')}

			// other props here
		/>
	);
};
