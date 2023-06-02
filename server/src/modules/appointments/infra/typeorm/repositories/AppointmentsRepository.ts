import Appointment from '../entities/Appointment';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

import { AppDataSource } from 'data-source';
import { Repository } from 'typeorm';

import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

/*
const appointmentsRepository: IAppointmentsRepository =
  AppDataSource.getRepository(Appointment).extend({
    async findByDate(date: Date): Promise<Appointment | null> {
      const findAppointment = await this.findOne({
        where: { date },
      });


      return findAppointment;
    },
  });
  */

/*
const appointmentsRepository: IAppointmentsRepository =
  async function findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await ormRepository.findOne({
      where: { date },
    });

    return findAppointment;
  };
  */

class appointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Appointment);
  }

  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = this.ormRepository.create({ provider_id, date });

    await this.ormRepository.save(appointment);

    return appointment;
  }
}

export default appointmentsRepository;
