const key = document.querySelector('.key')

window.addEventListener('keydown', (event)=>{
    key.innerHTML=`<span>
        <table>
            <tr>
            <th>Key</th>
            </tr>
            <tr>
            <td>${event.key==" "?"space":event.key}
            </tr>
        </table>
    </span>`
})