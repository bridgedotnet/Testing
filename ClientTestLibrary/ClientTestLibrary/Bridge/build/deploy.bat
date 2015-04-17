rem This is to clear all js files in the target directory
rem Then to copy all js files from source to target directory
rem copy /y NUL EmptyFile.txt >NUL
rem Please note there is a pre-build command line to clear source directory before script generation

rem cd "..\..\..\TestSite\Tests"
rem del *.js /f /s /q
rem xcopy "..\..\ClientTestLibrary\Bridge\output\*.js" "." /Y /I /S
