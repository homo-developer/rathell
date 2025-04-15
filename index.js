const terminal = document.getElementById('terminal');

        function showNotification(type, message) {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'exclamation-triangle'}"></i> ${message}`;
            document.body.appendChild(notification);
            setTimeout(() => {
                notification.style.animation = 'fadeInUp 0.5s ease reverse';
                setTimeout(() => notification.remove(), 500);
            }, 3000);
        }

        document.querySelectorAll('.tool-button').forEach(button => {
            button.addEventListener('click', () => {
                const toolName = button.parentElement.querySelector('h3').textContent;
                const line = document.createElement('div');
                line.className = 'terminal-line info';
                line.textContent = `> Launching ${toolName}...`;
                terminal.appendChild(line);
                terminal.scrollTop = terminal.scrollHeight;
                showNotification('success', `${toolName} launched successfully!`);
            });
        });