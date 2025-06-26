export default function decorate(block) {
  const rows = Array.from(block.children);

  const titleRow = document.createElement('div');
  titleRow.className = 'eds-title';
  titleRow.innerHTML = `<h2>${rows[0]?.textContent || ''}</h2>`;

  const subtitleRow = document.createElement('div');
  subtitleRow.className = 'eds-subtitle';
  subtitleRow.innerHTML = `<p>${rows[1]?.textContent || ''}</p>`;

  const imageRow = document.createElement('div');
  imageRow.className = 'eds-image';
  const img = rows[2]?.querySelector('img');
  if (img) {
    imageRow.appendChild(img);
  }

  block.innerHTML = '';
  block.append(titleRow, subtitleRow, imageRow);
}
