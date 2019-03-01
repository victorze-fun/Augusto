import { showAlert } from './messages';
import $ from 'jquery';
import uuid from 'uuid/v4';

import "./styles.scss";

document.getElementById('btn-alert')
    .addEventListener('click', showAlert);

$('#btn-jq').click(() => alert(uuid()));

