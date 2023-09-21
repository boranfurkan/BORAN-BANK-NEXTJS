"use client"
import useWindow from '../../hooks/use-window';
import styles from "./ProgressBar.module.css"

export default function ProgressBar() {
    const { scrollHeight, maxHeight } = useWindow()
    const value = (scrollHeight / (maxHeight)) * 100;

    return (
        <progress className={styles.progressBar} max="100" value={value.toPrecision()}></progress>
    )
}