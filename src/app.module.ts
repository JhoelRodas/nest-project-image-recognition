import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PlansModule } from './plans/plans.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { OrganizationsMembersModule } from './organizations-members/organizations-members.module';
import { PatientsModule } from './patients/patients.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { DiagnosesModule } from './diagnoses/diagnoses.module';
import { TreatmentsModule } from './treatments/treatments.module';
import { ConsultationsModule } from './consultations/consultations.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    PrismaModule,
    PlansModule,
    OrganizationsModule,
    OrganizationsMembersModule,
    PatientsModule,
    AppointmentsModule,
    DiagnosesModule,
    TreatmentsModule,
    ConsultationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
