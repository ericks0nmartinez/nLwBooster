import React from 'react';

const CreatSystem = () => {
    return <div id="page-create-point">
        <form>
            <fieldset>
                <legend><h2>Cadastro das informações do Sistema</h2></legend>
                <div className="field">
                    <label htmlFor="logo">URL da logo da empresa</label>
                    <input type="text" name="logo" id="logo" />
                </div>
                <div className="field-group">
                    <div className="field">
                        <label htmlFor="title">Titulo da empresa</label>
                        <input type="text" name="title" id="title" />
                    </div>
                    <div className="field">
                        <label htmlFor="descrition">Descrição da empresa</label>
                        <input type="text" name="descrition" id="descrition" />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="image-background">URL imagem de fundo</label>
                    <input type="text" name="image-background" id="image-background" />
                </div>
                <div className="field-group">
                    <div className="field">
                        <label htmlFor="icon-action">URL do icone Ação do botão principal</label>
                        <input type="text" name="icon-action" id="icon-action" />
                    </div>
                    <div className="field">
                        <label htmlFor="action">Nome do botão principal</label>
                        <input type="text" name="action" id="action" />
                    </div>
                </div>
            </fieldset>
            <button type="submit">Cadastra Meu Sistema</button>
        </form>
    </div>
}

export default CreatSystem;