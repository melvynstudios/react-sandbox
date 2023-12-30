import React, { ReactNode } from 'react';
import styles from './Modal.module.css'

interface ModalProps {
	children: ReactNode;
	onBGClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

// Children will be the components that are being wrapped.
// So we can effectively apply more styling if needed.
function Modal(props: ModalProps) {
	return (
	<div className={styles.backdrop} onClick={props.onBGClick} >
		<dialog open className={styles.modal}>
			{props.children}
		</dialog>
	</div>
	)
}

export default Modal;