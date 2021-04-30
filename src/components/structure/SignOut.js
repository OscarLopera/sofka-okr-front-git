import { auth } from '../../functions/firebaseAuth';

var timeout;
window.onload = resetTimer;
document.onkeypress = resetTimer;
document.onmousemove = resetTimer;
export function logout() {
    alert("El sistema se cerrará por 2 minutos de inactividad.");
    auth.signOut();
    window.location.href = '/';
}
export function resetTimer() {
    if (auth.currentUser) {
        clearTimeout(timeout);
        timeout = setTimeout(logout, 999999999) //2 minutos de inactividad, tiempo en ms
    }
}

export function SingOut() {
    auth.signOut();
    window.location.href = '/';
}
