#### Liste todos os processos.

- _S= ~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ ps_
   
   PID TTY          TIME CMD
  30317 pts/0    00:00:00 bash
  35289 pts/0    00:00:00 ps

#### Agora use o comando sleep 30 &.

- _S= ~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ sleep 30 &_

[1] 35391

#### Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo).

- _S= ~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ ps_

    PID TTY          TIME CMD
  30317 pts/0    00:00:00 bash
  36966 pts/0    00:00:00 sleep
  36982 pts/0    00:00:00 ps

    _~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ kill 36966_

[1]+  Terminado               sleep 30 

#### Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background.

- _S=~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ sleep 30_
    _^Z_

[1]+  Parado                  sleep 30
    _~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ jobs_
[1]+  Executando              sleep 30 &
    _~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$_
[1]+  Concluído              sleep 15

#### Crie um processo em background que rode o comando sleep por 300 segundos.

- _S=~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ sleep 300 &_

[1] 39006

#### Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.

- ##### Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.

- _S=~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ sleep 200_
    _^Z_

[2]+  Parado                  sleep 200
    _~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ sleep 100_
    _^Z_

[3]+  Parado                  sleep 100

#### Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.
- ##### Você vai precisar trazer o processo para foreground (fg) e suspendê-lo (ctrl+z), ou enviar um sinal.

- _S=~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ jobs_
[1]   Executando              sleep 300 &
[2]-  Parado                  sleep 200
[3]+  Parado                  sleep 100

    _~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ fg %1_

sleep 300
    _^Z_
[1]+  Parado                  sleep 300

#### Retome a execução do processo sleep 100 em background com o comando bg.

- _S=~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ bg %3_

[3]+ sleep 100 &

    _~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ jobs_

[1]+  Parado                  sleep 300
[2]   Parado                  sleep 200
[3]-  Executando              sleep 100 &
#### Termine a execução de todos os processos sleep (mate os processos).

- _S= ~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ ps_

PID TTY          TIME CMD
  30317 pts/0    00:00:00 bash
  44269 pts/0    00:00:00 sleep
  44289 pts/0    00:00:00 sleep
  44305 pts/0    00:00:00 sleep
  44341 pts/0    00:00:00 ps

    _~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ bg_

[2]+ sleep 200 &

    _~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ bg_

[1]+ sleep 300 &

    _~/Documentos/trybe-exercicios/fundamentos/secao-01-unix-shell-e-git$ killall sleep_
