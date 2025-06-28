#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const run = async () => {
  const date = new Date().toISOString().split('T')[0];

  // 1. Удалить .git
  try {
    await fs.rm(path.join(__dirname, '.git'), { recursive: true, force: true });
    console.log('✅ .git удалён');
  } catch (e) {
    console.warn('⚠️ .git не найден');
  }

  // 2. Очистить README.md и вписать базу
  const readmePath = path.join(__dirname, 'README.md');
  const readmeContent = `# 🧪 Test Task\n\n🗓️ ${date}\n\n## Установка\n\`\`\`sh\nnpm install\nnpm run dev\n\`\`\`\n`;
  await fs.writeFile(readmePath, readmeContent, 'utf-8');
  console.log('✅ README.md обновлён');

  // 3. Удалить demo-компоненты
  const demoDir = path.join(__dirname, 'src', 'demo-components');
  try {
    await fs.rm(demoDir, { recursive: true, force: true });
    console.log('✅ src/demo-components очищены');
  } catch (e) {
    console.warn('⚠️ demo-components не найдены');
  }

  // 4. Готово
  console.log('\n🎮 Шаблон очищен. Удачи в тестовом!');
};

run();
