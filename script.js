window.onload = () => {
    const profileButton = document.getElementById("profile")
    const profileBlock = document.getElementById("profileBlock")

    profileButton.addEventListener('click', (e) => {
        e.stopPropagation()
        profileBlock.classList.toggle("hidden")
    })
    document.body.addEventListener('click', () => {
        profileBlock.classList.add("hidden")
    })
}