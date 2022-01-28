export default function Home(){
    return <>
        <fieldset className="dataUser">
            <legend>Dados de login</legend>
            <div id="dominio">
                <label htmlFor="dominio">Domínio: </label>
                <input type="text" name="dominio"/>
            </div>
            <div id="matricula">
                <label htmlFor="matricula">Matrícula: </label>
                <input type="text" name="matricula"/>
            </div>
            <div id="password">
                <label htmlFor="senha">Senha: </label>
                <input type="password" name="password"/>
            </div>
            <button type="submit" onClick={async () => {
                const dominio = (document.querySelector("#dominio > input") as HTMLInputElement).value
                const matricula = (document.querySelector("#matricula > input") as HTMLInputElement).value
                const password = (document.querySelector("#password > input") as HTMLInputElement).value               

                const result: Response = await fetch('/api/getToken', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        domainBase : dominio,
                        username: matricula,
                        password,
                        service: "moodle_mobile_app",
                    })
                });
                console.log(result)
                const j: Object = await result.json()
                console.log(j)
            }}>Sincronizar</button>
        </fieldset>
    </>
}