export default function AudioPlayerElement() {
    return (
        <div>
            <audio controls className="mt-5">
                <source src="/audios/01 - Lilium ~Opening Version~.flac" type="audio/ogg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}