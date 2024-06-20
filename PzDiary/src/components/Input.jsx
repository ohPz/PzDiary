export default function Input() {
    return{
        <form onsubmit="submitForm(event)">
        <input type="text" id="inp" placeholder="I have to..." />
        </form>
    }
}