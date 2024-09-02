import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual.
selectedDate.value = inputToday;

// Define a data mínima como sendo a data atual.
selectedDate.min = inputToday;

form.onsubmit = async (e) => {
  e.preventDefault();

  try {
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Obtém o horário selecionado
    const hourSelected = document.querySelector('.hour-selected');

    if (!hourSelected) {
      return alert("Selecione o horário");
    }

    const [hour] = hourSelected.innerText.split(":");

    // Combina a data selecionada com a hora selecionada
    const when = dayjs(selectedDate.value).set('hour', parseInt(hour)).startOf('hour');

    // Gera um ID único para o agendamento
    const id = new Date().getTime();

    // Chama a função de criação do agendamento
    await scheduleNew({
      id,
      name,
      when: when.toISOString(), // Salva o valor de `when` no formato ISO
    });

    await schedulesDay()

    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
  }
};