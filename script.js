const campoTarefa =
document.getElementById("campoTarefa");

const botaoAdicionar =
document.getElementById("botaoAdicionar");

const listaTarefas =
document.getElementById("listaTarefas");


 botaoAdicionar.addEventListener("click", 
    function( ) {
        const texto = campoTarefa.value.trim();
        
        if (texto ===""){
            alert("Digite uma tarefa primeiro");
            return;
        }

        const novaTarefa =
        document.createElement("li");

         novaTarefa.textContent = texto;

         const botaoDeletar = document.createElement("button");
          botaoDeletar.textContent = "X";

          novaTarefa.addEventListener("click", 
            function(){
               novaTarefa.classList.toggle("concluida");
            });

            botaoDeletar.addEventListener("click", 
                function (e) {
                    e.stopPropagation();// evita que clique no botão e risque toda a tarefa add
                    novaTarefa.remove(); // remove o item da tarefa
                }
            )

            novaTarefa.appendChild(botaoDeletar);

            listaTarefas.appendChild(novaTarefa);
            campoTarefa.value = "";
              
    });
         campoTarefa.addEventListener("keydown",
            function(event){
                if (event.key === "Enter"){
                    botaoAdicionar.click();
                }
    });