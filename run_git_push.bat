@echo off
setlocal
set "OUTFILE=%USERPROFILE%\Desktop\git_output.txt"

echo === GIT STATUS === > "%OUTFILE%"
wsl -e bash -c "cd /home/mktwe/mktweb360-web && git status 2>&1" >> "%OUTFILE%"

echo. >> "%OUTFILE%"
echo === PENDING COMMITS (origin/main..HEAD) === >> "%OUTFILE%"
wsl -e bash -c "cd /home/mktwe/mktweb360-web && git log origin/main..HEAD --oneline 2>&1" >> "%OUTFILE%"

echo. >> "%OUTFILE%"
echo === GIT PUSH === >> "%OUTFILE%"
wsl -e bash -c "cd /home/mktwe/mktweb360-web && git push 2>&1" >> "%OUTFILE%"

echo. >> "%OUTFILE%"
echo === DONE === >> "%OUTFILE%"
