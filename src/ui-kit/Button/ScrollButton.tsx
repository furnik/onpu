import React, {useEffect, useState} from 'react';
import {TopButton} from './styles';

export const ScrollButton: React.FC = () => {
	const [show, setShow] = useState(false);

	const scrollToTopHandler = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	};

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		const changeShowHandler = () => {
			let startPosition = 0;
			if (window.pageYOffset < 300) return setShow(false);
			timeout = setInterval(() => {
				const currentPosition = window.pageYOffset;
				if (currentPosition !== startPosition || window.pageYOffset < 300) {
					setShow(false);
					startPosition = currentPosition;
				} else {
					setShow(true);
					startPosition = currentPosition;
				}
			}, 200);
		};
		window.addEventListener('scroll', changeShowHandler);
		return () => {
			clearTimeout(timeout);
			window.removeEventListener('scroll', changeShowHandler);
		};
	}, []);

	return (
		<TopButton onClick={scrollToTopHandler} isShow={show}>
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M17.959 14.1062L9.63711 6.21245L2.05586 14.1062" stroke="#9BA3B1" strokeWidth="1.5"/>
			</svg>
		</TopButton>
	);
};
