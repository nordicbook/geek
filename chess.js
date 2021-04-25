class Chess {
    constructor(selector) {
        this.parent = document.querySelector(selector);
        this.columns = 8;
        this.rows = 8;
        this.columnNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    }

    createBoardHeaders(line, columnNames) {
        let elements = `
            <div class="${line}-block">
                ${line === 'row' ? '<div class="block ${line}-name"></div>' : ''}
        `;

        for (let i = 0; i < this.rows; i++) {
            elements += `
                <div class="block ${line}-name">${columnNames ? columnNames[i] : i}</div>
            `;
        }
        elements += `
                ${line === 'row' ? '<div class="block ${line}-name"></div>' : ''}                
            </div>
        `;

        if (line === 'row')
            this.rowLine = elements;
        else    
            this.columnLine = elements;

        console.log(this.rowLine);
    }
    createBoard() {
        let boardBlock = `
            <div class="board-block">
        `;
        let blocksAmount = this.rows * this.columns;
        for(let i = 1; i <= blocksAmount; i++) {
            let className = 'block-white';
            if (Math.floor((blocksAmount - i) / this.rows)  % 2) {
                if (i % 2) {
                    className = 'block-black';
                }
            } else {
                if (!(i % 2)) {
                    className = 'block-black';
                }
            }
            boardBlock += `<div class="block ${className}"></div>`;
        }

        boardBlock += `</div>`;
        this.boardBlock = boardBlock;
    }
    construct() {
        this.board = document.createElement('div');
        this.board.classList.add('board');
        this.board.innerHTML += `
            ${this.rowLine}
            <div class="flex">
                ${this.columnLine}
                ${this.boardBlock}
                ${this.columnLine}
            </div>
            ${this.rowLine}
        `;
        
        this.parent.append(this.board);
    }
    init() {
        this.createBoardHeaders('row', this.columnNames);
        this.createBoardHeaders('column');
        this.createBoard();
        this.construct();
    }
}

let chess = new Chess('body');
chess.init();