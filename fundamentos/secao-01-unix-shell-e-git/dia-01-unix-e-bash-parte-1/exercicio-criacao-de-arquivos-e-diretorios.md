##### Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.

- S= jrgoes:~/Documentos/trybe$ mkdir unix_tests && cd unix_tests

##### Crie um arquivo de texto com o nome trybe.txt.

- S= jrgoes:~/Documentos/trybe/unix_tests$ touch trybe.txt

##### Crie uma cópia do arquivo trybe.txt com o nome trybe_backup.txt.

- S= jrgoes:~/Documentos/trybe/unix_tests$ cp trybe.txt  trybe_backup.txt

##### Renomeie o arquivo trybe.txt.

- S= jrgoes:~/Documentos/trybe/unix_tests$ mv trybe.txt trybe1.txt

##### Dentro de unix_tests, crie um novo diretório chamado backup.

- S= jrgoes:~/Documentos/trybe/unix_tests$ mkdir backup

##### Mova o arquivo trybe_backup.txt para o diretório backup.

- S= jrgoes:~/Documentos/trybe/unix_tests$ mv trybe_backup.txt backup

##### Dentro de unix_tests, crie um novo diretório chamado backup2.

- S= jrgoes:~/Documentos/trybe/unix_tests$ mkdir backup2

##### Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.

- S= jrgoes:~/Documentos/trybe/unix_tests$ mv backup/trybe_backup.txt backup2

##### Apague a pasta backup.

- S= jrgoes:~/Documentos/trybe/unix_tests$ rmdir backup

##### Renomeie a pasta backup2 para backup.

- S= jrgoes:~/Documentos/trybe/unix_tests$ mv backup2 backup

##### Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

- S= jrgoes:~/Documentos/trybe/unix_tests$ pwd

/home/jrgoes/Documentos/trybe/unix_tests

##### Apague o diretório backup.

- S= jrgoes:~/Documentos/trybe/unix_tests$ rm -rf backup

##### Limpe o terminal.

- S= clear
