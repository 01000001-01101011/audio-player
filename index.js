var soundFile;

function readFile(soundFile) {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(soundFile);
    fileReader.onload = function(e) {
        playAudioFile(e.target.result);
        console.log(`Filename: '${soundFile.name}' (${(Math.floor(soundFile.size / 1024 / 1024 * 100)) / 100} MB)`);
    }
}

function playAudioFile(file) {
    const context = new window.AudioContext();
    context.decodeAudioData(file, function(buffer) {
        let source = context.createBufferSource();
        source.buffer = buffer;
        source.loop = false;
        source.connect(context.destination);
        source.start(0);
    });
}