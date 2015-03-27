rem This is to clear all js files in the target directory
rem Then to copy all js files from source to target directory
rem copy /y NUL EmptyFile.txt >NUL
rem Please note there is a pre-build command line to clear source directory before script generation

cd "..\..\..\TestSite\Tests"
del *.js /f /s /q
xcopy "..\..\ClientTestLibrary\Bridge\output\*.js" "." /Y /I /S
