document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-empleado');
    const empleadosTable = document.getElementById('empleados-body');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const posicion = document.getElementById('posicion').value;
        const salario = parseFloat(document.getElementById('salario').value);

        agregarEmpleado(nombre, apellido, posicion, salario);
        limpiarFormulario();
    });

    function agregarEmpleado(nombre, apellido, posicion, salario) {
        const newRow = empleadosTable.insertRow();
        newRow.innerHTML = `
            <td>${Math.floor(Math.random() * 1000)}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${posicion}</td>
            <td>${salario}</td>
        `;
    }

    function limpiarFormulario() {
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('posicion').value = '';
        document.getElementById('salario').value = '';
    }
});
