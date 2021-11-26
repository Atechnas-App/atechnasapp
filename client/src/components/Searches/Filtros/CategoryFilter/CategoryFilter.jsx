import "./CategoryFilter.css"

export default function CatFilter(){
    return(
        <div>
            <div>
                <h3>Categoria</h3>
            </div>
            <div>
                <form>
                    <div className="container-checkbox">
                        <div className="container-checkbox-input">
                            <input type='checkbox' value='recruiter' id='recruiter' className="checkbox-input"></input>
                            <input type='checkbox' value='developer' id='developer' className="checkbox-input"></input>
                            <input type='checkbox' value='marketing' id='marketing' className="checkbox-input"></input>
                            <input type='checkbox' value='designer' id='designer' className="checkbox-input"></input>
                        </div>
                        <div className="container-checkbox-label">
                            <label>Recruiter</label>
                            <label>Developer</label>
                            <label>Marketing</label>
                            <label>Designer</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}