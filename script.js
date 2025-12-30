function openLinks(spotify, drive) {
    window.open(spotify, "_blank");

    setTimeout(() => {
        window.open(drive, "_blank");
    }, 15000);
}
