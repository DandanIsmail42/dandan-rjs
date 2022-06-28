import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionaComponent, { DaftarBarang } from "./pembahasan/FunctionalComponent";

export default class Komponen extends React.Component {

    render() {
        return(
            <div>
                <ClassComponent nama="Dandan ismail" />
                <FunctionaComponent />
                <DaftarBarang />
            </div>
        )
    }
}
