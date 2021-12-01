function startClassifier()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9swDl-ctQ/'
    , modelReady);
}

function modelReady(){
    classifier.classify(gotResult)
}